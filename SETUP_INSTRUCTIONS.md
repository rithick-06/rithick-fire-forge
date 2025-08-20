# 🚀 Portfolio Setup Instructions

## 📧 Web3Forms Configuration

### 1. Get Your Access Key
1. Go to [Web3Forms](https://web3forms.com/)
2. Click "Get Access Key"
3. Enter your email address
4. Copy the access key you receive

### 2. Update the Contact Form
Replace `YOUR-WEB3FORMS-ACCESS-KEY` in `src/components/ContactSection.tsx` with your actual access key:

```tsx
<input type="hidden" name="access_key" value="YOUR-ACTUAL-ACCESS-KEY-HERE" />
```

## 📸 Add Your Photo

### Option 1: Replace Placeholder with Your Photo
1. Add your photo to the `public/` folder (e.g., `public/profile-photo.jpg`)
2. Update the HeroSection component:

```tsx
{/* Replace the placeholder div with your actual photo */}
<img 
  src="/profile-photo.jpg" 
  alt="Rithick M K" 
  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cyan-400/30 object-cover shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
/>
```

### Option 2: Keep the Current Placeholder
The current placeholder will show a user icon with a nice gradient background.

## 📄 Add Your Resume

### 1. Add Resume File
1. Place your resume (PDF recommended) in the `public/` folder
2. Name it `resume.pdf` (or update the path in the code)

### 2. Update Resume Path (if needed)
If you named your resume differently, update the path in `src/components/HeroSection.tsx`:

```tsx
link.href = '/your-resume-name.pdf'; // Update this path
link.download = 'Rithick_MK_Resume.pdf'; // Update filename if needed
```

## 🎨 Customization Options

### Profile Photo
- **Size**: Currently 128x128px (mobile) / 160x160px (desktop)
- **Shape**: Circular with border
- **Effects**: Hover animations, glow effects, 3D rotation

### Resume Download
- **Format**: PDF recommended for best compatibility
- **Filename**: Users will download as "Rithick_MK_Resume.pdf"
- **Button**: Styled with cyber theme and hover effects

## 🔧 Technical Details

### Web3Forms Features
- ✅ **Spam Protection**: Built-in spam filtering
- ✅ **Email Notifications**: Receive emails directly to your inbox
- ✅ **No Backend Required**: Works with static hosting
- ✅ **Free Tier**: 250 submissions per month

### File Structure
```
public/
├── resume.pdf          # Your resume file
├── profile-photo.jpg   # Your profile photo (optional)
└── ...                 # Other public assets
```

## 🚀 After Setup

1. **Test Contact Form**: Fill out and submit the contact form
2. **Check Email**: Verify you receive the message
3. **Test Resume Download**: Click the download button
4. **Customize**: Adjust colors, sizes, and effects as needed

## 📱 Mobile Optimization

The portfolio is fully responsive and will look great on all devices:
- **Mobile**: Optimized spacing and touch interactions
- **Tablet**: Balanced layout between mobile and desktop
- **Desktop**: Full 3D effects and animations

## 🎯 Next Steps

1. ✅ Configure Web3Forms access key
2. ✅ Add your profile photo
3. ✅ Add your resume file
4. ✅ Test all functionality
5. ✅ Deploy to your preferred hosting platform

---

**Need Help?** The portfolio is built with modern React, TypeScript, and Tailwind CSS. All components are modular and easy to customize!
