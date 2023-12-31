import SubscriptionButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

const SettingsPage = async () => {
  const isPro = await checkSubscription(); // checkSubscription can only be used on server side!

  return (
    <div className=" h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-muted-foreground text-sm">
        {isPro
          ? "You are currently on a Pro plan."
          : " You are currently on a Free plan"}
      </div>
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

export default SettingsPage;
