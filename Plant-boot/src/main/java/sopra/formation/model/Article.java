package sopra.formation.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Article {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@ManyToOne
	@JoinColumn(name="devis_id")
	@JsonView(Views.ViewArticle.class)
	private Devis devis;
	@ManyToOne
	@JoinColumn(name="vegetal_id")
	@JsonView(Views.ViewArticle.class)
	private Vegetal vegetal;
	
	
	public Article() {
		super();
	}

	public Article(Long id, Devis devis, Vegetal vegetal) {
		super();
		this.id = id;
		this.devis = devis;
		this.vegetal = vegetal;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Devis getDevis() {
		return devis;
	}
	public void setDevis(Devis devis) {
		this.devis = devis;
	}
	public Vegetal getVegetal() {
		return vegetal;
	}
	public void setVegetal(Vegetal vegetal) {
		this.vegetal = vegetal;
	}

	
}
