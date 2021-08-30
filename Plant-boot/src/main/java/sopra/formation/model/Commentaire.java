package sopra.formation.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Commentaire {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@ManyToOne
	@JoinColumn(name="utilisateur_id")
	@JsonView(Views.ViewCommentaire.class)
	private Utilisateur utilisateur;
	@ManyToOne
	@JoinColumn(name="vegetal_id")
	@JsonView(Views.ViewCommentaire.class)
	private Vegetal vegetal;
	@Lob
	@JsonView(Views.ViewCommon.class)
	private String contenu;
	
	
	public Commentaire() {
		super();
	}
	
	public Commentaire(Long id, int version, Utilisateur utilisateur, Vegetal vegetal, String contenu) {
		super();
		this.id = id;
		this.version = version;
		this.utilisateur = utilisateur;
		this.vegetal = vegetal;
		this.contenu = contenu;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public int getVersion() {
		return version;
	}


	public void setVersion(int version) {
		this.version = version;
	}


	public Utilisateur getUtilisateur() {
		return utilisateur;
	}


	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}


	public Vegetal getVegetal() {
		return vegetal;
	}


	public void setVegetal(Vegetal vegetal) {
		this.vegetal = vegetal;
	}


	public String getContenu() {
		return contenu;
	}


	public void setContenu(String contenu) {
		this.contenu = contenu;
	}
	
	
	
}
