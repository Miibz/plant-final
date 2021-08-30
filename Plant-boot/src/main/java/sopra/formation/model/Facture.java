package sopra.formation.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Facture {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private Long montant;
	@OneToOne(mappedBy="facture")
	@JsonView(Views.ViewFacture.class)
	private Commande commande;
	@OneToOne
	@JoinColumn(name="factureGuideUtilisation")
	@JsonView(Views.ViewFacture.class)
	private GuideUtilisation guideUtilisation;
	
	public Facture() {
		super();
	}

	public Facture(Long id, Long montant, Commande commande, GuideUtilisation guideUtilisation) {
		super();
		this.id = id;
		this.montant = montant;
		this.commande = commande;
		this.guideUtilisation = guideUtilisation;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMontant() {
		return montant;
	}

	public void setMontant(Long montant) {
		this.montant = montant;
	}

	public Commande getCommande() {
		return commande;
	}

	public void setCommande(Commande commande) {
		this.commande = commande;
	}

	public GuideUtilisation getGuideUtilisation() {
		return guideUtilisation;
	}

	public void setGuideUtilisation(GuideUtilisation guideUtilisation) {
		this.guideUtilisation = guideUtilisation;
	}
	
	
}
