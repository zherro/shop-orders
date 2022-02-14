import React from "react";
import { darkColor } from "./ThemeStyle.component";

const Header = () => {
	return <>
		<section id="header-store">
			<header style={ { backgroundColor: darkColor() } }>
				<div class="container-fluid p-3 pb-0">
					<div class="row">
						<div class="col-6 col-md-3">
							<div class="logo text-white fw-bold p-2 ps-1 pe-5">
								<a href="index.html" class="text-decoration-none text-white" >
									<strong class="d-sm-block d-md-none">FS</strong>
									<strong class="d-none d-md-block">Fluffy Store</strong>
								</a>
							</div>
						</div>
						<div class="col-6 d-none d-md-block">
							<div class="input-group mb-3">
								<input type="text" class="form-control" placeholder="Product name or code"
									aria-label="Recipient's username" aria-describedby="button-addon2" />
								<button class="btn btn-outline-secondary theme-bg-aux" type="button" id="button-addon2">
									<i class="fa fa-search text-white"></i>
								</button>
							</div>
						</div>
						<div class="col-6 col-md-3">
							<a href="cart.html"
								class="cart text-white float-end p-2 text-decoration-none position-relative">
								<i class=" fas fa-cart-shopping"></i>
								<span>
									<span
										class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
										99+
									</span>
								</span>
							</a>

							<a href="#" class="text-white float-end p-2 text-decoration-none">
								hi, dude
							</a>
						</div>
					</div>
					<div class="row d-md-none">
						<div class="col">
							<div class="input-group mb-3 mt-2">
								<input type="text" class="form-control" placeholder="Recipient's username"
									aria-label="Recipient's username" aria-describedby="button-addon2" />
								<button class="btn btn-outline-secondary theme-bg-aux" type="button" id="button-addon2">
									<i class="fa fa-search text-white"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
		</section>
	</>
}

export default Header;