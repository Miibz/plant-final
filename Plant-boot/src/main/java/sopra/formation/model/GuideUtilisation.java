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
public class GuideUtilisation {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private FormatSauvegarde formatSauvegarde;
	@OneToOne
	@JoinColumn(name="meteo_id")
	@JsonView(Views.ViewGuideUtilisation.class)
	private Meteo meteo;
	@OneToOne(mappedBy="guideUtilisation")
	@JsonView(Views.ViewGuideUtilisation.class)
	private Facture facture;
	
	public GuideUtilisation() {
		super();
	}

	public GuideUtilisation(Long id, int version, FormatSauvegarde formatSauvegarde, Meteo meteo, Facture facture) {
		super();
		this.id = id;
		this.version = version;
		this.formatSauvegarde = formatSauvegarde;
		this.meteo = meteo;
		this.facture = facture;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public FormatSauvegarde getFormatSauvegarde() {
		return formatSauvegarde;
	}
	public void setFormatSauvegarde(FormatSauvegarde formatSauvegarde) {
		this.formatSauvegarde = formatSauvegarde;
	}
	public Meteo getMeteo() {
		return meteo;
	}
	public void setMeteo(Meteo meteo) {
		this.meteo = meteo;
	}
	public Facture getFacture() {
		return facture;
	}
	public void setFacture(Facture facture) {
		this.facture = facture;
	}
	
}
