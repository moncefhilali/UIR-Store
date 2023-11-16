using Domain.Entities;
using Domain.Interfaces;
using Application.Interfaces;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly IGenericRepository<User> _userRepository;

        public UserService(IGenericRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await _userRepository.GetUsersAsync();
        }

        public async Task CreateUserAsync(User user)
        {
            // You can add additional business logic/validation here if needed
            await _userRepository.CreateUserAsync(user);
        }
    }
}
