
// import { useState, useEffect } from "react";
// import {copy, linkIcon, loader, tick } from "../assets";
import { useState } from 'react';
import '../App.css';
const demo = () => {
  const [article, setArticle]= useState({
    url:'',
    summary:''
  })
  const handleSubmit = async (e)=>{alert("Submitted")}
  return (
    <section className="mt-16 w-full max-w-full ">
      <div className="searchbox flex flex-col w-full gap-2 ">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          {/* <img 
    src="{linkIcon}" 
    alt="linkicon"
    className="absolute left-0 my-2 ml-3 w-5 "
     /> */}

          <input type="url"
            placeholder="Paste Link"
            value={article.url}
            onChange={(e) => {setArticle({
              ... article, url:e.target.value
            })}}
            required
            className="input"

          />
          <button type='submit'
          // onClick={handleSubmit}
          className="peer-focus:border-gray-600 peer-focus:text-gray-100  ">
            ✦
          </button>
          
        </form>

      </div>
    </section>
  )
}

export default demo;