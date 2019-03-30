package expenseReimbursement.util;

import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import org.apache.log4j.Logger;

import expenseReimbursement.service.UserService;

public class ConnectionFactory {
	
	private static Logger log = Logger.getLogger(UserService.class);
	private static ConnectionFactory cf = null;
	
	public static synchronized ConnectionFactory getInstance() {
		if(cf == null) {
			cf = new ConnectionFactory();
		}
		return cf;
	}
	public Connection getConnection() {
		Connection conn = null;
		Properties prop = new Properties();
		String path = "src/main/resources/database.properties";
		
		try {
			//prop.load(new FileReader(path));
			log.info("trying to create url");
			String driver = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
			String server = "jdbc:sqlserver://localhost:1433";
			String database = "Expense_Reimbursement_Db";
			String username = "MicrosoftAccount\\archaether@gmail.com";
			String password = "";
			String security = "integratedSecurity = true";
			String url = server+ ";database="+database+";username="+username+";password="+password+";"+security+";";
			
			//Class.forName(prop.getProperty("driver"));
//			conn = DriverManager.getConnection(
//						prop.getProperty("url"),
//						prop.getProperty("username"),
//						prop.getProperty("password")
//						);
			conn = DriverManager.getConnection(url);
			log.info("Connection Success");
		}/*catch(IOException e) {
			e.printStackTrace();
		}*/catch(SQLException e) {
			e.printStackTrace();
		}catch(Exception e) {
			e.printStackTrace();
		}
		return conn;
		
	}
	
}
