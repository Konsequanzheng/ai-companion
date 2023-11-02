"use client";

import { Category, Companion } from "@prisma/client";
import React from "react";

interface CompanionFormProps {
  initialData: Companion | null; // can be null in the case it's not found or new
  categories: Category[];
}

const CompanionForm = ({ initialData, categories }: CompanionFormProps) => {
  return <div>CompanionForm</div>;
};

export default CompanionForm;
