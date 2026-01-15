# 📚 IELTS Quiz App

A modern, full-stack React Native mobile application for IELTS practice quizzes. Built with TypeScript, Supabase, Razorpay, and Zustand for a seamless learning experience.

## ✨ Key Features

- 🔐 **Google Sign-In Authentication** - Secure user authentication
- 📝 **Interactive Quiz Interface** - 7-question quiz with instant feedback
- 💰 **Razorpay Payment Integration** - Unlock detailed reports with secure payments
- 📊 **Detailed Performance Reports** - View all answers with correctness feedback
- 🔄 **Quiz Retakes** - Practice multiple times and track progress
- 🎨 **Modern UI/UX** - Clean, responsive design built with React Native
- 📱 **Cross-platform** - Works on iOS and Android
- ⚡ **Type-safe** - Full TypeScript support throughout the app
- 🔒 **Secure** - Environment variables, Supabase RLS, and encrypted storage

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React Native CLI** | Mobile development framework |
| **TypeScript** | Type-safe programming language |
| **Zustand** | Lightweight state management |
| **Supabase** | Backend, authentication, database |
| **React Navigation** | App navigation and routing |
| **Google Sign-In** | OAuth authentication |
| **Razorpay** | Payment gateway integration |
| **React Native Blur** | Blur effect for locked reports |

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** v22.11.0 or higher ([download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Xcode** 14+ (for iOS development)
- **Android Studio** 2021.1+ (for Android development)
- **CocoaPods** (for iOS dependencies)
- A **Supabase** account ([create here](https://supabase.com))
- A **Google Cloud** account ([create here](https://console.cloud.google.com))
- A **Razorpay** account ([create here](https://razorpay.com))

## 🚀 Quick Start

### 1. Setup Project

```bash
# Navigate to project
cd Documents/Work/IELTSQuizApp

# Install dependencies
npm install

# Install iOS pods
cd ios && pod install && cd ..
```

### 2. Configure Environment

```bash
# Create .env file
cp .env.example .env

# Edit .env with your credentials
nano .env
```

### 3. Setup Supabase

```sql
-- Run in Supabase SQL Editor

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  avatar_url TEXT,
  is_paid BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_option TEXT NOT NULL,
  sort_order INTEGER NOT NULL,
  is_active BOOLEAN DEFAULT true
);

CREATE TABLE user_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  question_id UUID NOT NULL REFERENCES questions(id),
  selected_option TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  razorpay_payment_id TEXT NOT NULL,
  razorpay_order_id TEXT NOT NULL,
  amount INTEGER NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Run the App

```bash
# iOS
npm run ios

# Android
npm run android
```

## 📖 Documentation

Comprehensive guides are available:

| Document | Purpose |
|----------|---------|
| [QUICK_START.md](./QUICK_START.md) | Get running in 5 minutes |
| [SETUP.md](./SETUP.md) | Complete installation guide |
| [PLATFORM_SETUP.md](./PLATFORM_SETUP.md) | iOS & Android specific setup |

## 📁 Project Structure

```
IELTSQuizApp/
├── src/
│   ├── components/              # Reusable UI components
│   │   ├── Button.tsx          # Primary button component
│   │   ├── Loading.tsx         # Loading indicator
│   │   ├── ErrorMessage.tsx    # Error display
│   │   ├── QuestionCard.tsx    # Question display
│   │   ├── OptionButton.tsx    # Option button
│   │   └── EmptyState.tsx      # Empty state view
│   ├── screens/                 # App screens
│   │   ├── SplashScreen.tsx    # Initial splash screen
│   │   ├── LoginScreen.tsx     # Google Sign-In
│   │   ├── QuizScreen.tsx      # Quiz interface
│   │   └── ReportScreen.tsx    # Results & payment
│   ├── navigation/              # Navigation setup
│   │   └── RootNavigator.tsx   # Main navigator
│   ├── store/                   # Zustand stores
│   │   ├── authStore.ts        # Auth state
│   │   ├── quizStore.ts        # Quiz state
│   │   └── paymentStore.ts     # Payment state
│   ├── services/                # API & business logic
│   │   ├── config.ts           # Configuration
│   │   ├── supabase.ts         # Supabase client
│   │   ├── authService.ts      # Auth logic
│   │   ├── quizService.ts      # Quiz logic
│   │   └── paymentService.ts   # Payment logic
│   ├── types/                   # TypeScript types
│   │   └── index.ts            # All type definitions
│   └── utils/                   # Utility functions
├── App.tsx                       # Root component
├── package.json                  # Dependencies
├── tsconfig.json                # TypeScript config
├── babel.config.js              # Babel config
├── .env.example                 # Environment template
├── SETUP.md                      # Setup guide
├── PLATFORM_SETUP.md            # Platform-specific setup
└── QUICK_START.md               # Quick start guide
```

## 🎯 App Flow

```
┌─────────────────┐
│  Splash Screen  │
└────────┬────────┘
         │ Check auth
         ├─ Logged In → Quiz Screen
         └─ Not Logged → Login Screen
                          │
                          ↓
                    ┌──────────────┐
                    │ Login Screen │
                    │ Google OAuth │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │ Quiz Screen  │
                    │ 7 Questions  │
                    └──────┬───────┘
                           │
                           ↓
                    ┌──────────────┐
                    │Report Screen │
                    └──────┬───────┘
                           │
                           ├─ Not Paid → Locked + Payment
                           └─ Paid → Full Report
```

## 🔧 Commands

```bash
# Development
npm start                    # Start Metro bundler
npm run ios                  # Run on iOS simulator
npm run android              # Run on Android emulator
npm test                     # Run tests
npm run lint                 # Run linter

# Build
npm run build:ios           # Build iOS app
npm run build:android       # Build Android app

# Clean
npm run clean               # Clean all cache
cd ios && pod deintegrate && pod install && cd ..  # Reset iOS
```

## 🔐 Environment Variables

Create a `.env` file with:

```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
GOOGLE_CLIENT_ID=ios-client-id.apps.googleusercontent.com
GOOGLE_WEB_CLIENT_ID=web-client-id.apps.googleusercontent.com
RAZORPAY_KEY=your-razorpay-key
```

**⚠️ Never commit `.env` to version control!**

## 🎨 Customization

### Change App Name

1. Update `app.json`:
```json
{
  "name": "YourAppName",
  "displayName": "Your App Name"
}
```

2. iOS: Update `ios/IELTSQuizApp/Info.plist`
3. Android: Update `android/app/build.gradle`

### Change Payment Amount

Edit `src/services/paymentService.ts`:
```typescript
const PAYMENT_AMOUNT = 99; // ₹99
```

### Change Quiz Questions

Add questions to Supabase `questions` table:
```sql
INSERT INTO questions (...) VALUES (...)
```

### Customize Styling

Edit component StyleSheets in `src/components/` and `src/screens/`

## 🚨 Troubleshooting

### "Cannot find module '@env'"
```bash
npm install react-native-dotenv
```

### Pod installation fails
```bash
cd ios
rm -rf Pods Podfile.lock
pod install --repo-update
cd ..
```

### Google Sign-In not working
- Verify bundle ID matches Google Cloud Console
- Check `.env` credentials
- Ensure internet permission

### Razorpay checkout not opening
- Verify `RAZORPAY_KEY` is correct
- Check internet connection
- Ensure amount > minimum

See [SETUP.md](./SETUP.md) for more solutions.

## 📊 State Management (Zustand)

```typescript
// Authentication
import { useAuthStore } from './src/store/authStore';
const { user, setUser, clearUser } = useAuthStore();

// Quiz
import { useQuizStore } from './src/store/quizStore';
const { questions, answers, setAnswer } = useQuizStore();

// Payment
import { usePaymentStore } from './src/store/paymentStore';
const { isPaid, setIsPaid } = usePaymentStore();
```

## 🔗 API Reference

### Auth Service
```typescript
signInWithGoogle()          // Google OAuth
signOutUser()               // Logout
getCurrentUser()            // Get logged-in user
getIdToken()                // Get auth token
```

### Quiz Service
```typescript
fetchQuestions()            // Get all questions
saveUserAnswers()           // Save quiz answers
calculateQuizResult()       // Calculate score
getUserAnswers()            // Get previous answers
```

### Payment Service
```typescript
openRazorpayCheckout()     // Open payment dialog
getLatestPayment()         // Get payment history
hasUserPaid()              // Check payment status
```

## 📱 Platform-Specific Notes

### iOS
- Minimum deployment target: 13.0
- Requires CocoaPods
- Google Sign-In: Need Client ID
- Razorpay: Included in pod

### Android
- Minimum SDK: 24
- Target SDK: 34
- Google Sign-In: Need Web Client ID
- Razorpay: Automatic setup

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run linter
npm run lint

# Run on device
npm run android -- --active-arch-only
npm run ios -- --simulator="iPhone 15 Pro"
```

## 🔒 Security Checklist

- [ ] Never hardcode secrets
- [ ] Use environment variables
- [ ] Enable Supabase RLS
- [ ] Validate user input
- [ ] Use HTTPS for all APIs
- [ ] Implement token refresh
- [ ] Secure payment details
- [ ] Sanitize error messages

## 📈 Performance Tips

1. Use `useMemo` and `useCallback` for expensive operations
2. Optimize images and assets
3. Enable Hermes engine for Android
4. Use code splitting if bundle gets large
5. Monitor app size regularly

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open a Pull Request

## 📄 License

This project is provided as-is for educational and commercial use.

## 📞 Support

- 📖 Read [SETUP.md](./SETUP.md) for detailed setup
- 🔍 Check console logs for errors
- 📱 Test on real device if simulator fails
- 💬 Review documentation links below

## 🔗 Useful Resources

- [React Native Documentation](https://reactnative.dev/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [React Navigation](https://reactnavigation.org/docs)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [Razorpay Integration](https://razorpay.com/docs/)
- [Google Sign-In Guide](https://developers.google.com/identity/sign-in)

---

**Built with ❤️ for IELTS learners worldwide**

*Last Updated: 2024*


## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
