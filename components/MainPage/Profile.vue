<template>
              <div

								class="hs-dropdown [--strategy:static] lg:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] lg:[--is-collapse:false] [--gpu-acceleration:false]"
							>
								<button
									id="hs-header-profile-dropdown"
									type="button"
									aria-haspopup="menu"
									aria-expanded="false"
									aria-label="Dropdown"
									class="inline-flex items-center justify-center size-[46px] text-sm font-semibold leading-none rounded-full bg-white text-gray-800"
								>
									AC
								</button>
								<div
									class="hs-dropdown-menu hs-dropdown-open:scale-100 border border-gray-100 hs-dropdown-open:opacity-100 scale-95 opacity-0 z-10 ease-in-out transition-[transform,opacity] duration-200 min-w-60 bg-white shadow-lg rounded-lg hidden"
									role="menu"
									aria-orientation="vertical"
									aria-labelledby="hs-header-profile-dropdown"
								>
									<div class="p-1.5 space-y-0.5">
										<NuxtLink
											class="p-2 flex gap-x-3 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 rounded-lg transition-colors duration-200 text-sm truncate font-medium"
											to="/panel"
										>
											<div
												class="w-full flex flex-col items-start justify-center"
											>
												Панель управления
											</div>

										</NuxtLink>

										<NuxtLink
											class="p-2 flex gap-x-3 hover:bg-red-200 focus:outline-none focus:bg-red-200 rounded-lg transition-colors duration-200 text-sm truncate font-medium"
											to="/panel"
										>
											<div
												class="w-full flex flex-col items-start justify-center"
											>
												Выйти из аккаунта
											</div>
										</NuxtLink>
									</div>
								</div>
							</div>
</template>