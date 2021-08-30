package sopra.formation.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class RecetteJardin {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@ManyToOne
	@JoinColumn(name="recetteJardinRecette_id")
	@JsonView(Views.ViewRecetteJardin.class)
	private Recette recette;
	@ManyToOne
	@JoinColumn(name="JardiRecetteJardin_id")
	@JsonView(Views.ViewRecetteJardin.class)
	private Jardin jardin;
	
	public RecetteJardin() {
		super();
	}

	public RecetteJardin(Long id, int version, Recette recette, Jardin jardin) {
		super();
		this.id = id;
		this.version = version;
		this.recette = recette;
		this.jardin = jardin;
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

	public Recette getRecette() {
		return recette;
	}

	public void setRecette(Recette recette) {
		this.recette = recette;
	}

	public Jardin getJardin() {
		return jardin;
	}

	public void setJardin(Jardin jardin) {
		this.jardin = jardin;
	}
	
	
	
}
