package sopra.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@DiscriminatorValue("utilisateur")
public class Utilisateur extends Personne {
	@JsonView(Views.ViewCommon.class)
	@Column(name = "numeroTelephone")
	private String numeroTelephone;
	@OneToMany(mappedBy="utilisateur")
	@JsonView(Views.ViewUtilisateur.class)
	private List<Adresse> adresse;
	@OneToMany(mappedBy="utilisateur")
	@JsonView(Views.ViewUtilisateur.class)
	private List<Jardin> jardin;
	@OneToMany(mappedBy="utilisateur")
	@JsonView(Views.ViewUtilisateur.class)
	private List<Devis> devis;
	@OneToMany(mappedBy="utilisateur")	
	@JsonView(Views.ViewUtilisateur.class)
	private List<Recherche> recherche;
	@OneToMany(mappedBy="utilisateur")
	@JsonView(Views.ViewUtilisateur.class)
	private List<Commentaire> commentaire;
	
	public Utilisateur() {
		super();
	}


	public Utilisateur(Long id, int version, String nom, String prenom, String adresseMail, String motDePasse,
			String pseudo, boolean enable) {
		super(id, version, nom, prenom, adresseMail, motDePasse, pseudo, enable);
		// TODO Auto-generated constructor stub
	}


	public Utilisateur(int version, String numeroTelephone, List<Adresse> adresse, List<Jardin> jardin,
			List<Devis> devis, List<Recherche> recherche, List<Commentaire> commentaire) {
		super();
		this.numeroTelephone = numeroTelephone;
		this.adresse = adresse;
		this.jardin = jardin;
		this.devis = devis;
		this.recherche = recherche;
		this.commentaire = commentaire;
	}




	public String getNumeroTelephone() {
		return numeroTelephone;
	}
	public void setNumeroTelephone(String numeroTelephone) {
		this.numeroTelephone = numeroTelephone;
	}

	public List<Adresse> getAdresse() {
		return adresse;
	}
	public void setAdresse(List<Adresse> adresse) {
		this.adresse = adresse;
	}
	public List<Jardin> getJardin() {
		return jardin;
	}
	public void setJardin(List<Jardin> jardin) {
		this.jardin = jardin;
	}
	public List<Devis> getDevis() {
		return devis;
	}
	public void setDevis(List<Devis> devis) {
		this.devis = devis;
	}
	public List<Recherche> getRecherche() {
		return recherche;
	}
	public void setRecherche(List<Recherche> recherche) {
		this.recherche = recherche;
	}
	public List<Commentaire> getCommentaire() {
		return commentaire;
	}
	public void setCommentaire(List<Commentaire> commentaire) {
		this.commentaire = commentaire;
	}
	
}
