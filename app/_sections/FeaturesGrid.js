function FeaturesGrid() {
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="text-center min-[1440px]:px-40">
        <h3 className="text-base font-semibold text-indigo-700">Premium abstract images</h3>
        <h1 className="text-3xl md:text-5xl font-semibold text-neutral-900 mt-3 mb-5">Easy access to top quality images</h1>
        <p className="text-lg md:text-xl text-neutral-600">
          In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence.
        </p>
      </header>
      {/* grid */}
      <div className="grid grid-cols-4 md:grid-cols-6 min-[1440px]:grid-cols-12 gap-x-4 gap-y-8 md:gap-8 min-[1440px]:gap-x-8 min-[1440px]:gap-y-12">
        <div className="col-span-4 md:max-[1439px]:col-span-3 text-center">
          <div className="flex justify-center items-center mx-auto w-12 h-12 rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-700 w-6">
              <path d="M13 10H18L12 16L6 10H11V3H13V10ZM4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-2 text-neutral-900">Infinite Download</h2>
          <p className="text-base text-neutral-600">
            Once you subscribe to our plans, they&apos;re all yours. Download as many as you want and use them for work presentations,
            wallpapers, and much more.
          </p>
        </div>
        <div className="col-span-4 md:max-[1439px]:col-span-3 text-center">
          <div className="flex justify-center items-center mx-auto w-[48px] h-[48px] rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" className="fill-indigo-700">
              <path d="M15.4565 9.67503L15.3144 9.53297C14.6661 8.90796 13.8549 8.43369 12.9235 8.18412C10.0168 7.40527 7.22541 9.05273 6.43185 12.0143C6.38901 12.1742 6.36574 12.3537 6.3285 12.8051C6.17423 14.6752 5.73449 16.0697 4.5286 17.4842C6.78847 18.3727 9.46572 18.9986 11.5016 18.9986C13.9702 18.9986 16.1644 17.3394 16.8126 14.9202C17.3306 12.9869 16.7513 11.0181 15.4565 9.67503ZM13.2886 6.21301L18.2278 2.37142C18.6259 2.0618 19.1922 2.09706 19.5488 2.45367L22.543 5.44787C22.8997 5.80448 22.9349 6.37082 22.6253 6.76891L18.7847 11.7068C19.0778 12.8951 19.0836 14.1721 18.7444 15.4379C17.8463 18.7897 14.8142 20.9986 11.5016 20.9986C8 20.9986 3.5 19.4967 1 17.9967C4.97978 14.9967 4.04722 13.1865 4.5 11.4967C5.55843 7.54658 9.34224 5.23935 13.2886 6.21301ZM16.7015 8.09161C16.7673 8.15506 16.8319 8.21964 16.8952 8.28533L18.0297 9.41984L20.5046 6.23786L18.7589 4.4921L15.5769 6.96698L16.7015 8.09161Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-2 text-neutral-900">Purely Handcrafted</h2>
          <p className="text-base text-neutral-600">
            No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.
          </p>
        </div>
        <div className="col-span-4 md:max-[1439px]:col-span-3 text-center">
          <div className="flex justify-center items-center mx-auto w-[48px] h-[48px] rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" className="fill-indigo-700">
              <path d="M16.2877 9.42773C15.413 7.97351 13.8195 7 12 7 9.23999 7 7 9.23999 7 12 7 14.76 9.23999 17 12 17 13.8195 17 15.413 16.0265 16.2877 14.5723L14.5729 13.5442C14.0483 14.4166 13.0927 15 12 15 10.3425 15 9 13.6575 9 12 9 10.3425 10.3425 9 12 9 13.093 9 14.0491 9.58386 14.5735 10.4568L16.2877 9.42773ZM22 12C22 6.47998 17.52 2 12 2 6.47998 2 2 6.47998 2 12 2 17.52 6.47998 22 12 22 17.52 22 22 17.52 22 12ZM4 12C4 7.57996 7.57996 4 12 4 16.42 4 20 7.57996 20 12 20 16.42 16.42 20 12 20 7.57996 20 4 16.42 4 12Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-2 text-neutral-900">All Are Under licensed</h2>
          <p className="text-base text-neutral-600">
            The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy
            (such as paintings or prints on paper).
          </p>
        </div>
        <div className="col-span-4 md:max-[1439px]:col-span-3 text-center">
          <div className="flex justify-center items-center mx-auto w-[48px] h-[48px] rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" className="fill-indigo-700">
              <path d="M12.0049 2C17.5277 2 22.0049 6.47715 22.0049 12C22.0049 17.5228 17.5277 22 12.0049 22C9.57847 22 7.3539 21.1358 5.62216 19.6985L5.37815 19.4892L6.27949 17.5875C7.73229 19.0759 9.76067 20 12.0049 20C16.4232 20 20.0049 16.4183 20.0049 12C20.0049 7.58172 16.4232 4 12.0049 4C7.66997 4 4.14034 7.44784 4.00869 11.7508L4.00488 12H6.50488L3.79854 17.7161C2.66796 16.096 2.00488 14.1254 2.00488 12C2.00488 6.47715 6.48204 2 12.0049 2ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-2 text-neutral-900">Cancel Anytime</h2>
          <p className="text-base text-neutral-600">Subscribe at your own pace, and cancel when you feel it&apos;s enough.</p>
        </div>
        <div className="col-span-4 md:max-[1439px]:col-span-3 text-center">
          <div className="flex justify-center items-center mx-auto w-[48px] h-[48px] rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" className="fill-indigo-700">
              <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.4023 13.7511 13.0963 12.1763 13.0051L12 13C10.4023 13 9.09634 14.2489 9.00509 15.8237L9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-2 text-neutral-900">Empowering For Team</h2>
          <p className="text-base text-neutral-600">We support multiple seats at once, requiring only a single payment.</p>
        </div>
        <div className="col-span-4 md:max-[1439px]:col-span-3 text-center">
          <div className="flex justify-center items-center mx-auto w-[48px] h-[48px] rounded-full shadow">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" className="fill-indigo-700">
              <path d="M5.46257 4.43262C7.21556 2.91688 9.5007 2 12 2C17.5228 2 22 6.47715 22 12C22 14.1361 21.3302 16.1158 20.1892 17.7406L17 12H20C20 7.58172 16.4183 4 12 4C9.84982 4 7.89777 4.84827 6.46023 6.22842L5.46257 4.43262ZM18.5374 19.5674C16.7844 21.0831 14.4993 22 12 22C6.47715 22 2 17.5228 2 12C2 9.86386 2.66979 7.88416 3.8108 6.25944L7 12H4C4 16.4183 7.58172 20 12 20C14.1502 20 16.1022 19.1517 17.5398 17.7716L18.5374 19.5674Z"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mt-5 mb-2 text-neutral-900">No Limitations</h2>
          <p className="text-base text-neutral-600">Use as many as you want, from Dribbble presentations to PowerPoint presentations.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
