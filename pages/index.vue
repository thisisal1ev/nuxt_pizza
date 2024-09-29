<template>
	<section class="mt-10">
		<div class="container">
			<h3 class="font-extrabold">Все пиццы</h3>
		</div>

		<TopBar />

		<div class="container mt-10 pb-14">
			<div class="flex gap-[60px]">
				<div class="w-[250px]">
					<Filters />
				</div>

				<div class="flex-1">
					<div class="flex flex-col gap-16">
						<ProductsGroup
							:products="[
								{
									id: 1,
									name: 'Сырный цыпленок',
									price: '395',
									imgURL:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
								},
								{
									id: 2,
									name: 'Диабло',
									price: '449',
									imgURL:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
								},
								{
									id: 3,
									name: 'Чизбургер-пицца',
									price: '399',
									imgURL:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
								},
								{
									id: 4,
									name: 'Сырный цыпленок',
									price: '395',
									imgURL:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
								},
								{
									id: 5,
									name: 'Сырный цыпленок',
									price: '395',
									imgURL:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
								},
								{
									id: 6,
									name: 'Сырный цыпленок',
									price: '395',
									imgURL:
										'https://media.dodostatic.net/image/r:292x292/11EE7D610E8BBB248F31270BE742B4BD.avif',
								},
							]"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
