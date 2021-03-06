package sopra.formation.rest.dto;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Utilisateur;
import sopra.formation.model.Views;



public class UserDTO {
	@JsonView(Views.ViewConnexion.class)
	private String login;
	@JsonView(Views.ViewConnexion.class)
	private String password;
	@JsonView(Views.ViewConnexion.class)
	private Utilisateur utilisateur;
	@JsonView(Views.ViewConnexion.class)
	private String type;

	public UserDTO() {
		super();
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur Utilisateur) {
		this.utilisateur = utilisateur;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
