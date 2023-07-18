import Link from "next/link";
import React from "react";

export default function UserCard({ users }) {
  return (
    <div className="flex-1 w-3/5 border-4 border-slate-600 text-2xl shadow-lg">
      <Link href={`/clients/${users.slug}`}>{users.name.toUpperCase()}</Link>
    </div>
  );
}
