const { User, UserSchema } = require("./User.model");
const {
  Administrative,
  AdministrativeSchema,
} = require("./Administrative.model");
const { Student, StudentSchema } = require("./Student.model");
const { Horario, HorarioSchema } = require("./Horario.model");
const { Membership, MembershipSchema } = require("./Membership.model");
const { Promotion, PromotionSchema } = require("./Promotion.model");
const {
  AsignacionHorarios,
  AsignacionHorariosSchema,
} = require("./AsignacionHorarios.model");
const { Wod, WodSchema } = require("./Wod.model");
const {
  WodEjercicios,
  WodEjerciciosSchema,
} = require("./WodEjercicios.models");
const { Booking, BookingSchema } = require("./Booking.model");
const { Rol, RolSchema } = require("./Rol.model");
const { Exercises, ExercisesSchema } = require("./Exercise.model");
const { PermissionType, PermissionSchema } = require("./PermissionType.model");

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Administrative.init(AdministrativeSchema, Administrative.config(sequelize));
  Student.init(StudentSchema, Student.config(sequelize));
  Horario.init(HorarioSchema, Horario.config(sequelize));
  Membership.init(MembershipSchema, Membership.config(sequelize));
  Promotion.init(PromotionSchema, Promotion.config(sequelize));
  AsignacionHorarios.init(
    AsignacionHorariosSchema,
    AsignacionHorarios.config(sequelize)
  );
  Wod.init(WodSchema, Wod.config(sequelize));
  WodEjercicios.init(WodEjerciciosSchema, WodEjercicios.config(sequelize));
  Booking.init(BookingSchema, Booking.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  Exercises.init(ExercisesSchema, Exercises.config(sequelize));
  PermissionType.init(PermissionSchema, PermissionType.config(sequelize));

  ///////

  Rol.associate(sequelize.models);
  PermissionType.associate(sequelize.models);
  User.associate(sequelize.models);
  Administrative.associate(sequelize.models);
  Membership.associate(sequelize.models);
  Exercises.associate(sequelize.models);
  WodEjercicios.associate(sequelize.models);
  Wod.associate(sequelize.models);
  Booking.associate(sequelize.models);
}

module.exports = setupModels;
