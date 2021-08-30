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
public class DejaPlante {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private Long age;
	@ManyToOne
	@JoinColumn(name="jardin_id")
	@JsonView(Views.ViewDejaPlante.class)
	private Jardin jardin;
	@ManyToOne
	@JoinColumn(name="vegetal_id")
	@JsonView({Views.ViewDejaPlante.class,Views.ViewJardin.class})
	private Vegetal vegetal;
	
	public DejaPlante() {
		super();
	}

	public DejaPlante(Long id, int version, Long age, Jardin jardin, Vegetal vegetal) {
		super();
		this.id = id;
		this.version = version;
		this.age = age;
		this.jardin = jardin;
		this.vegetal = vegetal;
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

	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}

	public Jardin getJardin() {
		return jardin;
	}

	public void setJardin(Jardin jardin) {
		this.jardin = jardin;
	}

	public Vegetal getVegetal() {
		return vegetal;
	}

	public void setVegetal(Vegetal vegetal) {
		this.vegetal = vegetal;
	}

}
