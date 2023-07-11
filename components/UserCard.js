import Link from 'next/link';
import React from 'react';

export default function UserCard({ users, key }) {
  return (
    <div className="text-2xl shadow-lg w-full flex flex-col justify-center items-center">
      <Link href={`/clients/${users.slug}`}>{users.name.toUpperCase()}</Link>
    </div>
  );
}
