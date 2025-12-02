
//usuario - componentes paciente
export * from './usuario/components/paciente/anamnesis';
export * from './usuario/components/paciente/ficha-clinica';
export * from './usuario/components/paciente/form-nuevo-paciente';
export * from './usuario/components/paciente/mediciones';
export * from './usuario/components/paciente/planificacion';
export * from './usuario/components/paciente/requerimientos';
export * from './usuario/components/profesional/form-nuevo-profesional';
export * from "./usuario/api/usuario.service";
export * from "./usuario/types/usuario";

//consulta
export * from "./consulta/api/consulta.service";
export * from "./consulta/types/consulta";
export * from "./consulta/dtos/create-consulta.dto";
export * from "./consulta/dtos/update-consulta.dto";
export * from "./consulta/entities/consulta.entities";

//inicio sesion
export * from "./auth/components/form-inicio-sesion";

//types
export * from './usuario/types/forms';
export * from './usuario/types/usuario';

//graph
export * from './consulta/graficos/resumen.graph';
export * from './consulta/graficos/comp-corp-kg.graph';
export * from './consulta/graficos/comp-corp-porc.graph';
export * from './consulta/graficos/perimetros.graph';
export * from './consulta/graficos/pliegues.graph';
export * from './consulta/graficos/resumen-ficha.graph';
export * from './consulta/graficos/test.graph';