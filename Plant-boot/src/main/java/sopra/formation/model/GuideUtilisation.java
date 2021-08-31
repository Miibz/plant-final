package sopra.formation.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class GuideUtilisation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	//@JsonView(Views.ViewCommon.class)
	//private FormatSauvegarde formatSauvegarde;
	//@OneToOne
	//@JoinColumn(name="meteo_id")
	//@JsonView(Views.ViewGuideUtilisation.class)
	//private Meteo meteo;
	//@OneToOne(mappedBy="guideUtilisation")
	//@JsonView(Views.ViewGuideUtilisation.class)
	//private Facture facture;
	@JsonView(Views.ViewCommon.class)
	private String nom;
	@JsonView(Views.ViewCommon.class)
	@Lob
	@Column(columnDefinition="LONGTEXT")
	private String contenu;
	
	
	public GuideUtilisation() {
		super();
	}


	public GuideUtilisation(Long id, int version, String nom, String contenu) {
		super();
		this.id = id;
		this.version = version;
		this.nom = nom;
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


	public String getNom() {
		return nom;
	}


	public void setNom(String nom) {
		this.nom = nom;
	}


	public String getContenu() {
		return contenu;
	}


	public void setContenu(String contenu) {
		this.contenu = contenu;
	}

	
}
