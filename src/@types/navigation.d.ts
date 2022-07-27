declare namespace Navigation {
  export declare type AppTabsParamList = {
    Home: any;
    Weather: any;
    Calendar: any;
    Garden: any;
    Settings: any;
    Login: any;
    Register: any;
    Tasks: any;
  };

  export declare type AppTabsPageProps<T extends keyof AppTabsParamList> =
    import("@react-navigation/bottom-tabs").BottomTabScreenProps<AppTabsParamList, T>;
}
