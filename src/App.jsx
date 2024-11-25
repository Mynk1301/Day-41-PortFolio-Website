import React from 'react'
import image from '../src/assets/img2.jpg'
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import WordRotate from "@/components/ui/word-rotate";

import { ConfettiButton } from "@/components/ui/confetti";


function App() {
  return (
    <>



      <section className="mt-12 w-[800px] mx-auto flex gap-10 items-center">

        <div className="">
        <WordRotate
         className="text-4xl font-black text-black dark:text-white"
         words={["Hey , I am Mayank 👋", "Frontend Web Developer 🧑‍💻"]}
         />

          <p className="text-xl  mt-4">I am Mayank , I am in third year doing B.tech . I am learning Frontend Web development . I have knowledge about HTML  CSS , Tailwind CSS , Javascript and React </p>

          <div className="flex gap-4 items-center mt-3">
            <a href="https://x.com/Mayanks94206003" target="_blank" className="text-2xl"><FaTwitter /></a>
            <a href="https://wa.me/917082630418?text=I just viewed your portfolio , wanna offer some work " target='_blank' className="text-2xl"><IoLogoWhatsapp /></a>
            <a href="https://www.instagram.com/mayankk0104" target="_blank" className="text-3xl"><AiFillInstagram /></a>
            <a href="/" className="text-3xl"><FaYoutube /></a>
          </div>

        </div>

        <img src={image} className='h-56 w-56 object-cover rounded-full' alt="" />

      </section>




      <section className="mt-20 mx-auto w-[800px]">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-xl font-thin mt-2">Hi! I'm Mayank, a 20-year-old B.Tech student specializing in Computer Science and Engineering (CSE) from Jhajjar, Haryana. I’m passionate about exploring the world of technology, coding, and innovation, constantly striving to enhance my skills and knowledge in this exciting field. &nbsp; Let’s innovate and grow together!
       </p>
      </section>


      <section className="mt-12 mx-auto w-[800px] ">
        <h1 className="text-3xl font-black">Projects</h1>

        <div className="mx-auto mt-5 w-[800px] border rounded-xl px-2 py-2  ">
          <h2 className="text-3xl font-bold flex gap-3 items-center">React <span><img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className='h-10' alt="" /></span> </h2>


          <div className="flex gap-4  mt-2">

          <div className=" border rounded-xl w-1/3 p-2 relative hover:scale-[1.02]">
              <img src='https://i.ytimg.com/vi/GV3HUDMQ-F8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBDX0meXWntQams20Wn3jArUnablg' className='w-full object-cover  h-44  rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">Netflix Clone</h1>
              <p className="text-sm  font-thin mt-1 mb-2">
                Above mentioned Netflix clone is built on top of Tailwind and React . It basically have some movies data and when we click on movie poster trailer is shown.
              </p>
              <a href="https://day-36-netfliiix-clone.vercel.app/" target='_blank' className="  hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px] ">Click here <span>➡️</span></a>
            </div>

            <div className=" border rounded-xl  w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://img.freepik.com/premium-photo/list-icon-notebook-with-completed-todo-list-3d-render_471402-428.jpg" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">To-Do App</h1>
              <p className="text-sm font-thin mt-1 mb-2">This To-Do App is built on top of Tailwind , React & Google Firebase  to store and retrieve data whenever needed .It is a powerful tool to manage daily tasks.</p>
              <a href="https://day-39-intro-to-firebase.vercel.app/" target='_blank' className="   hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px]">Click here <span>➡️</span></a>
            </div>



            <div className="border rounded-xl  w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBxNhYc77ReAl1ZMHHQRmQfbUSVKNBDcwzg&s" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">Instagram SPA Clone</h1>
              <p className="text-sm font-thin mt-1 mb-2">This Insta Clone is built on  top of React using react router dom , so that whenever we click on any kind of link whole page dont refresh .Click below to explore .</p>
              <a href="https://day-35-insta-clone-spa.vercel.app/" target="_blank" className=" hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px]">Click here <span>➡️</span></a>
            </div>
          </div>
        </div>

        {/* Part-2 js */}

        <div className="mx-auto mt-10 w-[800px] border rounded-xl px-2 py-2">
          <h2 className="text-3xl font-bold flex gap-3 items-center">JavaScript <span><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png" title="javascript icons" className='h-10' alt="" /></span> </h2>


          <div className="flex gap-4  mt-2">

            <div className=" border rounded-xl  w-1/3 p-2 relative  hover:scale-[1.02]">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-gritty-cinematic-backdrop-a-luxurious-and-elegant-3d-rendering-of-a-image_3805012.jpg" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">Movie App </h1>
              <p className="text-sm font-thin mt-1 mb-2">Above mentioned movie app is built using JS and using API key in order to get input from user and fetch the details of the movie .Click below to explore more.</p>
              <a href="https://day-26-movie-app-using-api.vercel.app/" target="_blank" className=" hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px]">Click here <span>➡️</span></a>
            </div>

            <div className=" border rounded-xl w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://png.pngtree.com/thumb_back/fh260/background/20240209/pngtree-task-management-business-planning-app-illustration-vector-image_15623958.jpg" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">User Mgmt System</h1>
              <p className="text-sm  font-thin mt-1 mb-2">Above mentioned mgmt system is used to kee track of the users to signup for any service . Whenever some data is added Lorem ipsum dolor sit amet more.</p>
              <a href="https://day-22-user-management-system.vercel.app/" target='_blank' className="  hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px]  ">Click here <span>➡️</span></a>
            </div>

            <div className="border rounded-xl  w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW92aWUlMjB0aWNrZXR8ZW58MHx8MHx8fDA%3D" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">Theatre Bookings</h1>
              <p className="text-sm font-thin mt-1 mb-2">This movie seat booking works on the concet when a person try to book a seat , details are asked and seat is booked , we can even cancel the seat booked . </p>
              <a href="https://day-29-javascript-major-project.vercel.app/" target="_blank" className="  hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px] ">Click here <span>➡️</span></a>`
            </div>




          </div>


        </div>

        {/* part-3 */}

        <div className="mx-auto mt-10 w-[800px] border rounded-xl px-2 py-2">
          <h2 className="text-3xl font-bold flex gap-3 items-center">Tailwind & CSS<span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s" title="javascript icons" className='h-8' alt="" /></span> </h2>


          <div className="flex gap-4  mt-2">

            <div className=" border rounded-xl  w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBa4GqUXss9lomcXNc7xPMTXxSTT6u_iM5Q&s" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">Random Profile App</h1>
              <p className="text-sm font-thin mt-1 mb-2">Random profile generator built on top of Tailwind CSS fetches data from an API and display it on the screen . Mobile version of same is also avalaible.</p>
              <a href="https://frontend-assignment-9.vercel.app/" target='_blank' className="   hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px]">Click here <span>➡️</span></a>
            </div>



            <div className=" border rounded-xl w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://wallpapers.com/images/hd/chatgpt-pnu1s0vyuz9ckn9u.jpg" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">ChatGPT Clone</h1>
              <p className="text-sm  font-thin mt-1 mb-2">ChatGPT Clone is also built on top of Tailwind CSS , it only shows the similar layout , it is not functional by anychance as i dont have money to buy ChatGPT API Key.</p>
              <a href="https://chtgpt-tailwind.vercel.app/" className="   hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px] ">Click here <span>➡️</span></a>
            </div>

            <div className="border rounded-xl  w-1/3 p-2 relative hover:scale-[1.02]">
              <img src="https://cdn.dribbble.com/users/58739/screenshots/586626/dribbble_background_by_badhon_ebrahim.png?resize=400x0" className='w-full h-44 object-cover rounded-xl' alt="" />
              <h1 className="text-xl font-bold mt-3">Dribble Clone</h1>
              <p className="text-sm font-thin mt-1 mb-2">This page is just made by me for better understanding of  tailwind and css . it may looks similar to dribble webpage Click to exlpore.</p>
              <a href="https://frontend-assignment-5.vercel.app/" className="  hover:text-blue-600 font-medium  hover:bg-blue-50  px-2 py-1 rounded-[6px]">Click here <span>➡️</span></a>
            </div>




          </div>


        </div>





      </section>






      {/* <section className="mt-12 mx-auto w-[800px]">
        <h1 className="text-2xl font-bold">Work Experience</h1>

        <div className="flex gap-2 justify-between mt-4 ">
          <div className="flex gap-3 items-center">
          <div className="">
            <img src="https://img.freepik.com/free-vector/abstract-colorful-logo_23-2147503114.jpg?ga=GA1.1.1112463106.1729257386&semt=ais_hybrid" className='h-14 rounded-full object-cover' alt="" />
          </div>
          <div className="">
            <h1 className='mb-[-4px] font-semibold text-md'>Microsoft</h1>
            <p className="text-sm">Senior Web Developer</p>
          </div>
          </div>
          <div className="text-sm">JAN 2022 - JULY-2022</div>
          </div>

          <div className="flex gap-2 justify-between mt-4 ">
          <div className="flex gap-3 items-center">
          <div className="">
            <img src="https://img.freepik.com/free-vector/abstract-colorful-logo_23-2147503114.jpg?ga=GA1.1.1112463106.1729257386&semt=ais_hybrid" className='h-14 rounded-full object-cover' alt="" />
          </div>
          <div className="">
            <h1 className='mb-[-4px] font-semibold text-md'>Microsoft</h1>
            <p className="text-sm">Senior Web Developer</p>
          </div>
          </div>
          <div className="text-sm">JAN 2022 - JULY-2022</div>
          </div>

          <div className="flex gap-2 justify-between mt-4 ">
          <div className="flex gap-3 items-center">
          <div className="">
            <img src="https://img.freepik.com/free-vector/abstract-colorful-logo_23-2147503114.jpg?ga=GA1.1.1112463106.1729257386&semt=ais_hybrid" className='h-14 rounded-full object-cover' alt="" />
          </div>
          <div className="">
            <h1 className='mb-[-4px] font-semibold text-md'>Microsoft</h1>
            <p className="text-sm">Senior Web Developer</p>
          </div>
          </div>
          <div className="text-sm">JAN 2022 - JULY-2022</div>
          </div>

      </section> */}

    <div className="text-center mt-5">
      <ConfettiButton className="bg-neutral-100 rounded-[5px] text-black">Press me  🎉</ConfettiButton>
    </div>


    </>
  )
}

export default App
