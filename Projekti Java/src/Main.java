import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import org.json.JSONArray;
import org.json.JSONException;

public class Main 
{
	private final static String url = "http://134.122.87.241/api/teams";
	private static String inputLine;
	
	public static void main(String[] args)
	{
		try {
			getData();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (JSONException e) {
			e.printStackTrace();
		}
	}
	
	public static void getData() throws IOException, JSONException
	{
		try 
		{
			URL urlObj = new URL(url);
			HttpURLConnection conn = (HttpURLConnection) urlObj.openConnection();
			conn.setRequestMethod("GET");
			
			BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			StringBuffer response = new StringBuffer();
			while((inputLine = in.readLine()) != null)
			{
				response.append(inputLine);
			}
			in.close();
			
			System.out.println("----Ranging table------\n");
			JSONArray myResponse = new JSONArray(response.toString());
			
			for(int i=0; i < 8; i++)
			{
				System.out.println((i+1) + ".   "+ myResponse.getJSONObject(i).getString("name") + "    ");				
			}
						
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		
	}
}