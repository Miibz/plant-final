package sopra.formation.model;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Meteo {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	Long id;

	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;

	@Temporal(TemporalType.DATE)
	@JsonView(Views.ViewCommon.class)
	private Date dtJour;

	@JsonView(Views.ViewCommon.class)
	private int temperature;

	@JsonView(Views.ViewCommon.class)
	private ConditionMeteo conditionMeteo;

	@JsonView(Views.ViewCommon.class)
	private int forceDuVent;

	@OneToMany(mappedBy="meteo")
	@JsonView(Views.ViewCommon.class)
	private List<Jardin> Jardin;

	

	public Meteo() {
		super();

	}

	public Meteo(Long id, int version, Date dtJour, int temperature, ConditionMeteo conditionMeteo, int forceDuVent,
			List<sopra.formation.model.Jardin> jardin) {
		this.id = id;
		this.version = version;
		this.dtJour = dtJour;
		this.temperature = temperature;
		this.conditionMeteo = conditionMeteo;
		this.forceDuVent = forceDuVent;
		Jardin = jardin;
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

	public Date getDtJour() {
		return dtJour;
	}

	public void setDtJour(Date dtJour) {
		this.dtJour = dtJour;
	}

	public int getTemperature() {
		return temperature;
	}

	public void setTemperature(int temperature) {
		this.temperature = temperature;
	}

	public ConditionMeteo getConditionMeteo() {
		return conditionMeteo;
	}

	public void setConditionMeteo(ConditionMeteo conditionMeteo) {
		this.conditionMeteo = conditionMeteo;
	}

	public int getForceDuVent() {
		return forceDuVent;
	}

	public void setForceDuVent(int forceDuVent) {
		this.forceDuVent = forceDuVent;
	}

	public List<Jardin> getJardin() {
		return Jardin;
	}

	public void setJardin(List<Jardin> jardin) {
		Jardin = jardin;
	}

	@Override
	public String toString() {
		return "Meteo [id=" + id + ", version=" + version + ", dtJour=" + dtJour + ", temperature=" + temperature
				+ ", conditionMeteo=" + conditionMeteo + ", forceDuVent=" + forceDuVent + ", Jardin=" + Jardin + "]";
	}

	



}
