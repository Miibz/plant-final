package sopra.formation.model;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public abstract class Personne {
	@Id
	@GeneratedValue(strategy=GenerationType.TABLE)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewPersonne.class)
	private String nom;
	@JsonView(Views.ViewPersonne.class)
	private String prenom;
	@JsonView(Views.ViewPersonne.class)
	private String adresseMail;
	@JsonView(Views.ViewPersonne.class)
	private String motDePasse;
	@JsonView(Views.ViewCommon.class)
	private String pseudo;
	@JsonView(Views.ViewCommon.class)
	private boolean enable;
	
	
	public Personne() {
		super();
	}


	public Personne(Long id, int version, String nom, String prenom, String adresseMail, String motDePasse,
			String pseudo, boolean enable) {
		super();
		this.id = id;
		this.version = version;
		this.nom = nom;
		this.prenom = prenom;
		this.adresseMail = adresseMail;
		this.motDePasse = motDePasse;
		this.pseudo = pseudo;
		this.enable = enable;
	}


	public boolean isEnable() {
		return enable;
	}


	public void setEnable(boolean enable) {
		this.enable = enable;
	}


	public void setVersion(int version) {
		this.version = version;
	}


	public int getVersion() {
		return version;
	}
	public void setVersion(Long version) {
		version = version;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public String getAdresseMail() {
		return adresseMail;
	}
	public void setAdresseMail(String adresseMail) {
		this.adresseMail = adresseMail;
	}
	public String getMotDePasse() {
		return motDePasse;
	}
	public void setMotDePasse(String motDePasse) {
		this.motDePasse = motDePasse;
	}
	public String getPseudo() {
		return pseudo;
	}
	public void setPseudo(String pseudo) {
		this.pseudo = pseudo;
	}
	
}
