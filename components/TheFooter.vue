<template>
  <footer class="bg-[#1a2e44] w-full text-white font-nunito">
    <div class="lg:max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-32 divide-y">
      <div class="flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
        <div class="lg:w-1/4">
          <a href="#" class="flex justify-center space-x-3 lg:justify-start">
            <div class="flex items-center justify-center w-12 h-12 rounded-full">
              <img src="~assets/images/logo.png" class="dark:text-gray-900" />
            </div>
            <div class="font-extrabold text-2xl ml-2 mt-3">Waredev</div>
          </a>
          <p class="mt-4 text-sm leading-relaxed">
            Unlock your business's full potential with our expert IT consultancy. Our team expertise to help your business stay ahead of the curve.
          </p>
        </div>

        <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div class="space-y-3">
            <h3 class="uppercase font-bold">Services</h3>
            <ul class="space-y-1">
              <li><a href="/services/website-development">Website Development</a></li>
              <li><a href="/services/mobile-development">Mobile Development</a></li>
              <li><a href="/services/custom-backend-api">Custom Software Development</a></li>
              <!-- <li><a href="#">Internet of Things (IoT)</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Support and Maintenance</a></li> -->
            </ul>
          </div>

          <div class="space-y-3">
            <h3 class="uppercase font-bold">Company</h3>
            <ul class="space-y-1">
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>

          <div class="space-y-3">
            <h3 class="uppercase font-bold">Contact</h3>
            <ul class="space-y-1">
              <li><a href="#">support@waredev.co.id</a></li>
              <li>
                <a href="https://wa.me/6287713763012?text=Halo%2C%0ASaya%20tertarik%20untuk%20membuat%20janji%20konsultasi%20dengan%20Waredev%20Digital%20Solution.%0ATerima%20kasih.">
                  <p>+62 87713763012</p>
                </a>
              </li>
            </ul>
          </div>

          <div class="space-y-3 font-nunito ">
					<div class="uppercase dark:text-gray-50">Social media</div>
					<div class="flex justify-start space-x-3">
						<a rel="noopener noreferrer" href="https://www.facebook.com/waredevdigitalsolution" title="Facebook" class="flex items-center p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-5 h-5 fill-current">
								<path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
							</svg>
						</a>
						<a rel="noopener noreferrer" href="https://www.linkedin.com/company/waredev-digital-solution" title="Linkedin" class="flex items-center p-1 ">
							<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
						</a>
						<a rel="noopener noreferrer" href="https://www.instagram.com/waredevdigitalsolution" title="Instagram" class="flex items-center p-1">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="w-5 h-5 fill-current">
								<path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
							</svg>
						</a>
					</div>
				</div>
        </div>
      </div>
      <div class="py-6 text-sm text-center">© CV. Waredev Digital Solution. All rights reserved.</div>
    </div>
  </footer>
</template>
