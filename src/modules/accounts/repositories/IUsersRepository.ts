import { ICreateUserDTO } from "../dtos/ICreateDTO";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
