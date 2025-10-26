def get_cart(cart):
	cart = []
	return cart

def add_item(input, cart):
	cart.append(input)
	return f"'{input}' added successfully"

def remove_item(input, cart):
	cart.remove(input)
	return f"'{input}' removced successfully"
