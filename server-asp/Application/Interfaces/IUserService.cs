using Domain.Entities;

namespace Application.Interfaces
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetUsersAsync();
        Task CreateUserAsync(User user);
    }
}
