# AWS S3 Deployment Guide for React Portfolio

## Prerequisites
- AWS Account
- AWS CLI installed and configured
- Your S3 bucket: `david-portfolio-react` (eu-north-1)

## Step 1: Install AWS CLI

### Windows (PowerShell):
```powershell
# Download and install AWS CLI
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi

# Verify installation
aws --version
```

Or download installer from: https://aws.amazon.com/cli/

## Step 2: Configure AWS Credentials

```powershell
aws configure
```

Enter:
- **AWS Access Key ID**: [Your access key]
- **AWS Secret Access Key**: [Your secret key]
- **Default region**: `eu-north-1`
- **Output format**: `json`

## Step 3: Configure S3 Bucket for Static Website Hosting

### 3a. Enable Static Website Hosting
```powershell
aws s3 website s3://david-portfolio-react/ --index-document index.html --error-document index.html
```

### 3b. Set Bucket Policy (Make it Public)
```powershell
# Create policy file
@"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::david-portfolio-react/*"
    }
  ]
}
"@ | Out-File -FilePath bucket-policy.json -Encoding utf8

# Apply policy
aws s3api put-bucket-policy --bucket david-portfolio-react --policy file://bucket-policy.json
```

### 3c. Disable Block Public Access
```powershell
aws s3api put-public-access-block --bucket david-portfolio-react --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

## Step 4: Build Your React App

```powershell
cd myreactproject
npm run build
```

This creates optimized files in the `dist/` folder.

## Step 5: Deploy to S3

### Option A: Using AWS CLI (Recommended)
```powershell
# Deploy all files
aws s3 sync dist/ s3://david-portfolio-react/ --delete

# Set correct content types
aws s3 cp s3://david-portfolio-react/ s3://david-portfolio-react/ --recursive --exclude "*" --include "*.html" --content-type "text/html" --metadata-directive REPLACE
aws s3 cp s3://david-portfolio-react/ s3://david-portfolio-react/ --recursive --exclude "*" --include "*.css" --content-type "text/css" --metadata-directive REPLACE
aws s3 cp s3://david-portfolio-react/ s3://david-portfolio-react/ --recursive --exclude "*" --include "*.js" --content-type "application/javascript" --metadata-directive REPLACE
```

### Option B: Using npm Script (After AWS CLI is configured)
```powershell
npm run deploy
```

### Option C: Manual Upload via AWS Console
1. Go to https://s3.console.aws.amazon.com/
2. Open `david-portfolio-react` bucket
3. Click "Upload"
4. Drag ALL contents from `dist/` folder (not the folder itself):
   - index.html
   - assets/ folder
   - vite.svg
   - david.jpg
   - sunday-david.jpg
5. Click "Upload"

## Step 6: Access Your Website

Your website URL:
```
http://david-portfolio-react.s3-website.eu-north-1.amazonaws.com/
```

## Troubleshooting

### Issue: 404 Not Found
**Cause**: Files not uploaded or wrong URL
**Fix**: 
- Verify files exist in S3 bucket
- Use website endpoint (not object URL)
- Check that `index.html` is in root of bucket

### Issue: 403 Forbidden
**Cause**: Bucket policy not set correctly
**Fix**: Re-apply bucket policy from Step 3b

### Issue: Blank Page
**Cause**: Assets folder not uploaded or wrong paths
**Fix**: 
- Ensure `assets/` folder uploaded to S3
- Check browser console (F12) for errors
- Verify all files from `dist/` are in S3

### Issue: Routing doesn't work (404 on refresh)
**Cause**: Error document not set
**Fix**: Set error document to `index.html` in Step 3a

## Quick Deployment Commands (After Setup)

```powershell
# Build and deploy
npm run build
aws s3 sync dist/ s3://david-portfolio-react/ --delete

# Or use the npm script
npm run deploy
```

## Notes

- The `--delete` flag removes old files from S3
- Always build before deploying: `npm run build`
- Check browser console (F12) if issues occur
- Website endpoint is different from bucket URL
- For HTTPS and custom domain, use CloudFront

## CloudFront Setup (Optional - for HTTPS)

If you want HTTPS:
1. Create CloudFront distribution
2. Set Origin to S3 website endpoint (not bucket)
3. Set Default Root Object to `index.html`
4. Create custom error response: 404 → /index.html (200)
5. Use CloudFront URL or add custom domain

## File Structure in S3

After deployment, your S3 bucket should look like:
```
david-portfolio-react/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── vite.svg
├── david.jpg
└── sunday-david.jpg
```

## Security Notes

- Never commit AWS credentials to Git
- Use IAM user with limited S3 permissions
- Consider using AWS Secrets Manager
- Bucket is public by design (static website)
