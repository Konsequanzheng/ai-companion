import prismadb from "@/lib/prismadb";
import React from "react";
import CompanionForm from "./components/companion-form";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  // TODO: Check subscription
  const { userId } = auth();
  // if the url says is /companion/new, the companion won't exist
  // -> we know to show the create new companion page

  if (!userId) {
    // if there's no user, they have to sign in
    return redirectToSignIn();
  }

  const companion = await prismadb.companion.findUnique({
    where: {
      userId: userId, // only the user who created the companion will be able to see the screen
      id: params.companionId,
    },
  });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
