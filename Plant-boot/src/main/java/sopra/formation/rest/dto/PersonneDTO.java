package sopra.formation.rest.dto;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.formation.model.Personne;
import sopra.formation.model.Utilisateur;
import sopra.formation.model.Views;



public class PersonneDTO {
	@JsonView(Views.ViewConnexion.class)
	private String login;
	@JsonView(Views.ViewConnexion.class)
	private String password;
	@JsonView(Views.ViewConnexion.class)
	private Personne personne;
	@JsonView(Views.ViewConnexion.class)
	private String type;

	public PersonneDTO() {
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

	public Personne getPersonne() {
		return personne;
	}

	public void setPersonne(Personne personne) {
		this.personne = personne;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
