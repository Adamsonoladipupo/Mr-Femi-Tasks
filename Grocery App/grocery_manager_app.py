from app_funtions import *

def main_menu():
	main_menu = """
	Welcome to The Grocery Store
	1. Add item
	2. Remove item
	3. Show all available items
	"""
	print(main_menu)

cart = get_cart(cart = [])

while True:
	main_menu()
	user_input = input("Make a Selection: ")
	match user_input:
		case "1": 
			user_input = input("Enter an item name: ")
			print(add_item(user_input, cart))
		case "2": 
			user_input = input("Enter an item name: ")
			print(remove_item(user_input, cart))

		case "3":
			print("Available items")
			count = 0
			for item in cart:
				count +=1
				print(f"{count}. {item}")