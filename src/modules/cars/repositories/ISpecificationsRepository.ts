import { Specification } from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
  list({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification[]>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
