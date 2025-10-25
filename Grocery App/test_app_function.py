import unittest
from app_funtions import *

class TestGroceryAppFunction(unittest.TestCase):
	def test_if_grocery_app_cart_is_empty(self):
		actual = get_cart(cart = 0)
		expected = 0
		self.assertEqual(0,0)
	
	def test_if_cart_can_store_item(self):
		expected_1 = 1
		actual_1 =  get_cart(cart = [])
		self.assertEqual(expected_1, 1 )