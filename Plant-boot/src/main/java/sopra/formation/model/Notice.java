package sopra.formation.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;
@Entity
public class Notice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@JsonView(Views.ViewCommon.class)
	private Temps temps;
	@JsonView(Views.ViewCommon.class)
	private Engrais engrais;
	@OneToMany(mappedBy="notice")
	@JsonView(Views.ViewCommon.class)
	private List<Vegetal> vegetal;
	
	public Notice() {
		super();
	}
	
	public Notice(Long id, Temps temps, Engrais engrais, List<Vegetal> vegetal) {
		super();
		this.id = id;
		this.temps = temps;
		this.engrais = engrais;
		this.vegetal = vegetal;
	}

	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Temps getTemps() {
		return temps;
	}
	public void setTemps(Temps temps) {
		this.temps = temps;
	}
	public Engrais getEngrais() {
		return engrais;
	}
	public void setEngrais(Engrais engrais) {
		this.engrais = engrais;
	}


	public List<Vegetal> getVegetal() {
		return vegetal;
	}


	public void setVegetal(List<Vegetal> vegetal) {
		this.vegetal = vegetal;
	}
	
	
}
