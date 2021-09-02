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
public class Affinite {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView({Views.ViewCommon.class,Views.ViewAffinite.class})
	private Long id;
	@Version
	@JsonView({Views.ViewCommon.class,Views.ViewAffinite.class})
	private int version;
	@ManyToOne
	@JoinColumn(name="vegetal_id1")
	@JsonView({Views.ViewVegetal2.class,Views.ViewAffinite.class})
	private Vegetal vegetal1;
	@ManyToOne
	@JoinColumn(name="vegetal_id2")
	@JsonView({Views.ViewVegetal1.class,Views.ViewAffinite.class})
	private Vegetal vegetal2;

}
