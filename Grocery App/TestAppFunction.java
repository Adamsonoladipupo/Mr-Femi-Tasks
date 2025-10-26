import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestAppFunction{
	@Test
	public void TestIfCartIsEmpty(){
	//arrange
	AppFunction groceryCart = new AppFunction(); 

	//act
	int result = groceryCart.GetCart();

	//asser
	assertEquals(result, 0);
	}
}