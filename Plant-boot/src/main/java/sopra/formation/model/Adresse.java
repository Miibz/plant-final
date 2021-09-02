package sopra.formation.model;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;


@Embeddable
public class Adresse {
	@JsonView(Views.ViewCommon.class)
	private String numero;
	@JsonView(Views.ViewCommon.class)
	private String rue;
	@JsonView(Views.ViewCommon.class)
	private String codePostal;
	@JsonView(Views.ViewCommon.class)
	private String ville;
	
	public Adresse() {
		super();
	}


	public void setNumero(String numero) {
		this.numero = numero;
	}


	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}


	public String getRue() {
		return rue;
	}


	public void setRue(String rue) {
		this.rue = rue;
	}


	public String getVille() {
		return ville;
	}


	public void setVille(String ville) {
		this.ville = ville;
	}


	public String getNumero() {
		return numero;
	}


	public String getCodePostal() {
		return codePostal;
	}


	
	
}
