type RootStackParamList = {
    // Public navigation
    Start: undefined
    SignIn: undefined
    ForgotPassword: undefined
  
    // Tennis player navigation
    Profile: undefined
  }
  
  export declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }