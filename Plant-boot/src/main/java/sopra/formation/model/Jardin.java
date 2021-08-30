package sopra.formation.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Jardin {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private Sol sol;
	@JsonView(Views.ViewCommon.class)
	private Exposition exposition;
	@JsonView(Views.ViewCommon.class)
	private Integer superficie;
	@OneToMany(mappedBy="jardin")
	@JsonView(Views.ViewJardin.class)
	private List<DejaPlante> dejaPlante;
	@ManyToOne
	@JoinColumn(name="jardin_id")
	@JsonView(Views.ViewJardin.class)
	private Utilisateur utilisateur;
	@OneToMany(mappedBy="jardin")
	@JsonView(Views.ViewJardin.class)
	private List<RecetteJardin> recetteJardin;
	@ManyToOne
	@JoinColumn(name="meteo")
	private Meteo meteo;
	public Jardin() {
		super();
	}
	
	public Jardin(Long id, List<DejaPlante> dejaPlante, Sol sol, Exposition exposition, Integer superficie,
			Utilisateur utilisateur, List<RecetteJardin> recetteJardin, Meteo meteo) {
		this.id = id;
		this.dejaPlante = dejaPlante;
		this.sol = sol;
		this.exposition = exposition;
		this.superficie = superficie;
		this.utilisateur = utilisateur;
		this.recetteJardin = recetteJardin;
		this.meteo = meteo;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public List<DejaPlante> getDejaPlante() {
		return dejaPlante;
	}
	public void setDejaPlante(List<DejaPlante> dejaPlante) {
		this.dejaPlante = dejaPlante;
	}
	public Sol getSol() {
		return sol;
	}
	public void setSol(Sol sol) {
		this.sol = sol;
	}
	public Exposition getExposition() {
		return exposition;
	}
	public void setExposition(Exposition exposition) {
		this.exposition = exposition;
	}
	public Integer getSuperficie() {
		return superficie;
	}
	public void setSuperficie(Integer superficie) {
		this.superficie = superficie;
	}

	public Utilisateur getUtilisateur() {
		return utilisateur;
	}

	public void setUtilisateur(Utilisateur utilisateur) {
		this.utilisateur = utilisateur;
	}

	public List<RecetteJardin> getRecetteJardin() {
		return recetteJardin;
	}

	public void setRecetteJardin(List<RecetteJardin> recetteJardin) {
		this.recetteJardin = recetteJardin;
	}

	public Meteo getMeteo() {
		return meteo;
	}

	public void setMeteo(Meteo meteo) {
		this.meteo = meteo;
	}
	
	

}
