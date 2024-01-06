import React from "react";
import myimg from "../assets/myimg.jpeg";

function Sidebar() {
  return (
    <div className="bg-voilet-800 min-h-screen p-3 text-white">
      <div className="flex justify-center mt-2">
        <img src={myimg} alt="Girijesh" className="w-36 h-36 rounded-full" />
      </div>
      <p className="font-semibold text-left mt-3 text-2xl">Contact</p>
      <hr className="bg-white mb-2" />
      <div className="flex item-center gap-1 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
          />
        </svg>
        <p className="p-0">girijesh741@gmail.com</p>
      </div>
      <div className="flex item-center gap-1 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>

        <p className="p-0">Belhar khurd, Khalilabad Uttar Pradesh</p>
      </div>
      <div className="flex item-center gap-1 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z" />
          <path d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z" />
        </svg>

        <p >https://github.com/Girijesh1998</p>
      </div>
      <div className="flex item-center gap-1 mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>

        <p>+917081650914</p>
      </div>
      <p className="font-semibold text-left mt-3 text-2xl">Skill</p>
      <hr className="bg-white mb-2" />
      <div>
        <div>
          <div className="mb-1 text-base font-medium">HTML5</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-ful">
          <div className="bg-yellow-600 h-1.5 rounded-ful w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="mb-1 text-base font-medium">CSS3</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-ful">
          <div className="bg-yellow-600 h-1.5 rounded-ful w-3/4"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="mb-1 text-base font-medium">Bootstrap</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-ful">
          <div className="bg-yellow-600 h-1.5 rounded-ful w-3/5"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="mb-1 text-base font-medium">JavaScripts</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-ful">
          <div className="bg-yellow-600 h-1.5 rounded-ful w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="mb-1 text-base font-medium">React JS</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-ful">
          <div className="bg-yellow-600 h-1.5 rounded-ful w-5/6"></div>
        </div>
      </div>
      <p className="font-semibold text-left mt-3 text-2xl">Achivements</p>
      <hr className="bg-white mb-2" />
      <p mb-px>
        My biggest accomplishment is overcoming my fear of failure.If give me a
        complete sense of living and makes me more confident
      </p>
      <div className="flex items-center gap-1">
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <p className="text-center text-sm">5 Star Rating on Fiverr</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <p className="text-center text-sm">5 Star Rating on Fiverr</p>
        </div>
        <div className="flex flex-col items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <p className="text-center text-sm">5 Star Rating on Fiverr</p>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
