package sopra.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Devis {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@Column(name = "montant")
	@JsonView(Views.ViewCommon.class)
	private Long montant;
	@OneToMany(mappedBy="devis")
	@JsonView(Views.ViewCommon.class)
	private List<Article> article;
	@JsonView(Views.ViewCommon.class)
	private Statut statut;
	@ManyToOne
	@JoinColumn(name="devis_id")
	@JsonView(Views.ViewCommon.class)
	private Utilisateur utilisateur;
	@OneToOne
	@JoinColumn(name="devisComande_id")
	@JsonView(Views.ViewCommon.class)
	private Commande commande;
	
	public Devis() {
		super();
	}

	public Devis(Long id, int version, Long montant, List<Article> article, Statut statut, Utilisateur utilisateur,
			Commande commande) {
		super();
		this.id = id;
		this.version = version;
		this.montant = montant;
		this.article = article;
		this.statut = statut;
		this.utilisateur = utilisateur;
		this.commande = commande;
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

	public Long getMontant() {
		return montant;
	}

	public void setMontant(Long montant) {
		this.montant = montant;
	}

	public List<Article> getArticle() {
		return article;
	}

	public void setArticle(List<Article> article) {
		this.article = article;
	}

	public Statut getStatut() {
		return statut;
	}

	public void setStatut(Statut statut) {
		this.statut = statut;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	@Override
	public String toString() {
		return "Devis [id=" + id + ", version=" + version + ", montant=" + montant + ", article=" + article
				+ ", statut=" + statut + ", utilisateur=" + utilisateur + ", commande=" + commande + "]";
	}
	
	
}
