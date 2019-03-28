package expenseReimbursement.service;

import org.apache.log4j.Logger;

import expenseReimbursement.data.UserDAO;
import expenseReimbursement.model.User;

public class UserService {
	
	private static Logger log = Logger.getLogger(UserService.class);
	static UserDAO dao = new UserDAO();
	
	public User login(String username, String password) {
		User u = dao.getByUsername(username);
		if(u == null) {
			log.info("No such user found");
			return null;
		}
		else {
			if(u.getPassword() == password) {
				log.info("User successfully logged in!");
				return u;
			}
			else {
				log.info("Incorrect credentials.");
				return null;
			}
		}
	}
}
