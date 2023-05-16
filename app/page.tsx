"use client";

import { useState } from "react";

interface FormData {
  username: string;
  email: string;
}

export default async function Home() {
  const [form, setForm] = useState<FormData>({ username: "", email: "" });

  async function create(data: FormData) {
    try {
      fetch("http://localhost:3000/api/createuser", {
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(() => {
        setForm({ username: "", email: "" });
        //refreshData();
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1 className='text-center font-bold text-2xl mt-4'>Users</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(form);
        }}
        className='w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch'
      >
        <input
          type='text'
          placeholder='UserName'
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className='border-2 rounded border-gray-600 p-1'
        />

        <input
          type='text'
          placeholder='Email'
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className='border-2 rounded border-gray-600 p-1'
        />
        <button type='submit' className='bg-blue-800 text-white rounded p-1'>
          Add User +
        </button>
      </form>
      <section className='w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch'></section>
    </main>
  );
}
