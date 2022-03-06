import { getRepository, Repository } from "typeorm";

import { User } from "../../../users/entities/User";
import { Game } from "../../entities/Game";

import { IGamesRepository } from "../IGamesRepository";

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[]> {
    const games = this.repository
      .createQueryBuilder()
      .select("games")
      .from(Game, "games")
      .where("LOWER(games.title) LIKE LOWER(:param)", { param: `%${param}%` })
      .getMany();

    return games;
  }

  async countAllGames(): Promise<[{ count: string }]> {
    const gamesAmount = this.repository.query(
      "SELECT COUNT(*) as count FROM games"
    );

    return gamesAmount;
  }

  async findUsersByGameId(id: string): Promise<User[]> {
    const users = this.repository
      .createQueryBuilder()
      .select("users")
      .from(User, "users")
      .innerJoin("users.games", "games")
      .where("games.id = :id", { id })
      .getMany();

    return users;
  }
}
