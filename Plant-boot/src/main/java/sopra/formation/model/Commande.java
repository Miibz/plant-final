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
public class Commande {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private Statut statut;
	@OneToOne(mappedBy="commande")
	private Devis devis;
	@OneToOne
	@JoinColumn(name="commandeFacture_id")
	private Facture facture;
	
	public Commande() {
		super();
	}
	
	public Devis getDevis() {
		return devis;
	}

	public Commande(Long id, Statut statut, Devis devis, Facture facture) {
		super();
		this.id = id;
		this.statut = statut;
		this.devis = devis;
		this.facture = facture;
	}


	public void setDevis(Devis devis) {
		this.devis = devis;
	}



	public Facture getFacture() {
		return facture;
	}

	public void setFacture(Facture facture) {
		this.facture = facture;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Statut getStatut() {
		return statut;
	}
	public void setStatut(Statut statut) {
		this.statut = statut;
	}
	
}
