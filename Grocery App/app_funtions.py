def main_menu():
	main_menu = """
	Welcome to The Grocery Store
	1. Add item
	2. Remove item
	3. Show all available items
	"""
	print(main_menu)

def get_cart(cart):
	cart = []
	return cart

def add_item(input, cart):
	cart.append(input)
	return f"'{input}' added successfully"

def remove_item(input, cart):
	cart.remove(input)
	return f"'{input}' removced successfully"
